import { useState } from "react";
import NotifItem from "./components/NotifItem";


export default function App() {
    const [changeBackground, setChangeBackground] = useState(true);
    const [count, setCount] =useState(7);
    // const [showMessage, setShowMessage] =useState(false);
    const handleDecrement = () => {
        if (count > 1) {
          setCount(0)
        }
      }

    return (
      <div className="container">
           <header> 
                <div>
                    <h1>Notifications </h1>
                    <div className="notif_number">
                        <p className="hide-number">{count}</p>
                        
                    </div>
                </div>
                <p onClick={()=> {handleDecrement(); setChangeBackground(false)}}>Mark all as read</p>
           </header>
           <main className={changeBackground? " ": "mained"}>
                <NotifItem 
                        imageUrl="../assets/images/avatar-mark-webber.webp"
                        alt = "profile picture of mark webber"
                        commentName = "Mark Webber"
                        text1 ="reacted to your recent post"
                        text= "My first tournament today!"
                        time = "1m ago"
                />
                <NotifItem  imageUrl = "../assets/images/avatar-angela-gray.webp"
                        alt = "profile picture of angela gray"
                        commentName = "Angela Gray"
                        text1 ="followed you"
                        time = "5m ago"
                />
                <NotifItem  imageUrl = "../assets/images/avatar-jacob-thompson.webp"
                        alt = "profile picture of jacob thompson"
                        commentName = "Jacob Thompson"
                        text1 ="has joined your group"
                        text= "Chess Club"
                        time = "1 day ago"
                />
                <NotifItem  imageUrl = "../assets/images/avatar-rizky-hasanuddin.webp"
                        alt = "profile picture of Rizky Hasanuddin"
                        commentName = "Rizky Hasanuddin"
                        text1 ="sent you a private message"
                        time = "5 days ago"
                />

                <div className="message" >
                    <p>
                        Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
                        I'm already having lots of fun and improving my game.
                    </p>
                </div>
                <NotifItem  imageUrl = "../assets/images/avatar-kimberly-smith.webp"
                        alt = "profile picture of kimberly smith"
                        commentName = "Kimber Smith"
                        text1 ="commented on your picture"
                        time = "1 week ago"
                />
                <img src="../assets/images/image-chess.webp"  alt="a picture of a girl playing chess"/>
                <NotifItem  imageUrl = "../assets/images/avatar-nathan-peterson.webp"
                        alt = "profile picture of nathan peterson"
                        commentName = "Nathan Peterson"
                        text1 ="reacted to your recent post"
                        text= "5 end-game strategies to increase your win rate"
                        time = "2 weeks ago"
                />
                <NotifItem  imageUrl = "../assets/images/avatar-anna-kim.webp"
                        alt = "profile picture of anna kim"
                        commentName = "Anna Kim"
                        text1 ="left the group"
                        text= "Chess group"
                        time = "2 weeks ago"
                />
               
             
            </main>
        </div>
    )    
}