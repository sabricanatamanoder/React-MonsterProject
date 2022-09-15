import React, {useState, useEffect} from 'react';
import './App.css'
import CardListt from './CardList/card-list';
import SearchBox from './component/Search.Box';

function App() {
  //Monsters state'imizi boş bir array içerisine aldık. Gelen veri, bir array
  //içerisinde gösterilecek. searchField state'imizi de boş bir stringe eşitledik.

  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  //useEffect içerisindeki [] boş array, yazdığımız kodun bir kez çalıştırılması gerektiğine işaret eder.
  //fetch ile api'mizi yakaladıktan sonra, .then metodunun içerisinde, res.json ile
  //gelen veriyi, .json formatına dönüştürüyoruz ki, tarayıcımız kodu okuyabilsin. Ardından
  //çektiğimiz verideki, tüm usersları, setMonster state'ine atıyoruz.useEffect
  //içinde api'ı yakalamaya çalışmasaydık, sayfa sürekli render edilecekti.
  useEffect(() =>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users)=>setMonsters(users))
  }, []);

  //Search işleminde arattığımız sonuca, büyük-küçük harf kıstasını ihlal etmeyerek
  //ulaşabilmek adına, oluşturduğumz fonksiyonda, girilen karakterlerin küçük harfe
  //dönüştürülmesini sağlıyoruz. Bunu, searchFieldString değişkenine atıyoruz ki, kullanabilelim.
  //En son olarak da, bu değişkeni parametre olarak setSearchField state'ine atıyoruz.
  //Artık, arama kutusuna bir şeyler yazdığımızda, onun değerine, küçük karakter şeklinde erişebiliriz.
  const onSearchChange=(e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  //Api içerisindeki monsterları aynı forma çevirmek için
  //Api'dan çektiğimiz verideki tüm monsterlara bir filter uyguladık. (Callback fonksiyonu ile)
  //Bu filterlarda uygulanan her işleme monster adını verdik. Daha sonra api'den
  //çektiğimiz monster adlarını da, default olarak küçük tanımladık. Burada şunu diyoruz:
  //searchField içerisine girilen değer, var mı yok mu, küçük harfe göre monster adlarından
  //kontrol et.
  const filteredMonster = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  })

  return (
    <div>
      <h1 className='app-title'>Monster Rolodex</h1>
      {/* SearchBox'a props verelim. Propslar, componentler arasında iletişimi sağlarlar. 
      //Daha sonra bu prosları, Search.Box'daki değişkenimizin içerisine parametre olarak gönderelim.
      Zira componentler arasındaki iletişim parent'tan child'a doğrudur.*/}
      <SearchBox 
      className="monster-search-box" 
      placeholder="Search Monsters" 
      onChangeHandler={onSearchChange}/>
      {/* CardListt componentımıza, filteredMonster'daki verilerimizi props olarak
      atıyoruz. */}
      <CardListt monsters={filteredMonster}/>
    </div>
  )
}

export default App;
