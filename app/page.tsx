


import Container from "./components/Container";
import ListingCard from "./components/Listing/ListingCard";





export const listing= [
  {
    topic : "เกาหลีใต้อยากเอา KF21 ตีตลาดเครื่องบินของไทย แต่อินโดบอกโนโนโน",
    who : "สมาชิกหมายเลข 6389467",
    when : "1 พ.ค.",
    imageSrc : "/images/news1.jpeg"
  },
  {
    topic : "ทำไงดีแฟนโดนให้ออกจากงาน ทั้งๆที่ไกล้ จะคลอดลูก",
    who : "สมาชิกหมายเลข 8114773",
    when : "30 เม.ย.",
    imageSrc : "/images/news2.jpeg"
  },
  {
    topic : "ค่าดอกเบี้ยจาก Citibank -> UOB มาจากไหน ทั้งที่จ่ายบิลเต็มจำนวนก่อนกำหนด",
    who : "ลำดวนกวนลำใย",
    when : "22 ชั่วโมง",
    imageSrc : "/images/news2.jpeg"
  },
  {
    topic : "One Piece Spoil 1,114",
    who : "WhisBounty",
    when : "16 ชั่วโมง",
    imageSrc : "/images/news3.jpeg"
  },
  {
    topic : "",
    who : "",
    when : "",
    imageSrc : ""
  },
  {
    topic : "",
    who : "",
    when : "",
    imageSrc : ""
  },
  {
    topic : "",
    who : "",
    when : "",
    imageSrc : ""
  },
  {
    topic : "",
    who : "",
    when : "",
    imageSrc : ""
  },
]

export default function Home() {
  return (
    <Container>
      <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl-grid-cols-6 gap-8">
        {listing.map((list) => {
          return (
            <ListingCard key ={list.topic} data = {list}/>
          )
        })}
        
      </div>
      
    </Container>
  );
}
