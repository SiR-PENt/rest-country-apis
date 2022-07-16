import axios from "axios";

export default function SingleCountry({data}) {
   console.log(data)
    return (
        <p>Hi</p>
    )
}

export async function getStaticPaths () {
   const { data } = await axios.get(`https://restcountries.com/v3.1/all`);
//    const countries = data.map(country => country.name.common)  
   return {
    fallback: false,
    paths: data.map( country => ({ params: { Singlecountry: country.name.common.toString()}}) )
    } 
} 
export async function getStaticProps(context) {

    const country = context.params.Singlecountry;
    const {data} = await axios.get(
      `https://restcountries.com/v3.1/name/${country}`
    );
console.log(data)

 return {
    props: {
        data
    }
 };

}