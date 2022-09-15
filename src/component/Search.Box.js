import "./search-box.css"
//App.js'deki propslarımızı, parametre olarak Search.Box componentımıza gönderiyoruz.
const SearchBox = ({ onChangeHandler, className, placeholder }) => (
    <div>
      <input
        placeholder={placeholder}
        //İki tane class adı vermemizin sebebi, bu componentı başka bir yerde kullanmak
        //istersek css'de karşılaşacağımız zorlukları engellemek.
        className={`search-box ${className}`}
        type='search'
        onChange={onChangeHandler}
      />
    </div>
  )
  
  export default SearchBox;