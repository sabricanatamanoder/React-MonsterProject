import "./card-list.style.css"
import Card from "../card/card.component";

//App.js'deki monster propsunu parametre olarak gönderdik. Bütün name'lerimiz
//diğer component'taki monster içinde. Map metoduyla mevcut arrayin kopyasını oluşturuyoruz.
//Daha sonra, map metodu ile kopyaladığımız her monsterı, bir Card içine atıyoruz. Bunlara
//monster adını verip props olarak gönderiyoruz.
const CardListt = ({ monsters }) => {
    return (
        /* Jsx ile JavaScript kodu yazarken süslü parantez içine almalıyız. */
        <div className="card-list">
            {
                monsters.map((monster) => {
                    return <Card monster={monster} />
                })
            }
        </div>
    )
};

export default CardListt;