
import { useState } from "react";

export default function App() {
  const [selectedItem, setSelectedItem] = useState("");

  const products = [
    { name: "Vintage Clock", img: "/gallery1.jpg" },
    { name: "Retro Radio", img: "/gallery2.jpg" },
    { name: "Antique Vase", img: "/gallery3.jpg" },
    { name: "Collectable Figurine", img: "/gallery4.jpg" },
    { name: "Vintage Camera", img: "/gallery5.jpg" },
    { name: "Retro Sign", img: "/gallery6.jpg" }
  ];

  return (
    <div style={{fontFamily:"Arial", background:"#000", color:"#ddd", minHeight:"100vh"}}>

      <header style={{padding:"20px", textAlign:"center"}}>
        <img src="/divall-simmons-logo.jpg" style={{height:"80px"}}/>
        <h1 style={{color:"#f5d061"}}>Divall‑Simmons</h1>
        <p>Antiques • Vintage • Retro • Gifts & Collectables</p>
      </header>

      <section style={{padding:"40px", textAlign:"center"}}>
        <h2 style={{color:"#f5d061"}}>Offer of the Week</h2>
        <img src="/offer.jpg" style={{maxWidth:"400px", width:"100%"}}/>
        <p>Special featured item of the week.</p>
      </section>

      <section style={{padding:"40px"}}>
        <h2 style={{textAlign:"center", color:"#f5d061"}}>Featured Items</h2>

        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:"20px"}}>
          {products.map((item)=>(
            <div key={item.name} 
              onClick={()=>setSelectedItem(item.name)}
              style={{background:"#111", padding:"10px", cursor:"pointer"}}
            >
              <img src={item.img} style={{width:"100%"}}/>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding:"40px", textAlign:"center"}}>
        <h2 style={{color:"#f5d061"}}>Customer Enquiries</h2>
        <p>Free postage under 1KG. Contact for quote if over 1KG.</p>

        <form action="https://formsubmit.co/t23pds@aol.com" method="POST"
          style={{maxWidth:"500px", margin:"auto", display:"grid", gap:"10px"}}
        >
          <input type="hidden" name="_captcha" value="false"/>

          <input placeholder="Your Name"/>
          <input placeholder="Your Email"/>
          <input placeholder="Postcode"/>
          <input value={selectedItem} onChange={(e)=>setSelectedItem(e.target.value)} placeholder="Item Reference"/>
          <textarea placeholder="Message"></textarea>
          <button>Send Enquiry</button>
        </form>
      </section>

      <section style={{textAlign:"center", padding:"30px"}}>
        <h3>Visit Our Shop</h3>
        <p>Rhosllannerchrugog, Wrexham</p>
        <p>Phone: 07970710344</p>
        <p>Email: t23pds@aol.com</p>
      </section>

      <footer style={{textAlign:"center", padding:"20px", color:"#888"}}>
        © {new Date().getFullYear()} Divall‑Simmons
      </footer>

    </div>
  );
}
