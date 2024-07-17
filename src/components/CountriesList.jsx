import Spinner from "./Spinner";
import styles from "./CountriesList.module.css";
import Message from "./Message";
import CountriesItem from "./CountriesItem";
import { useCities } from "../contexts/CityContext";

const CountriesList = () => {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message="Add your first city" />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city?.country, emoji: city?.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countriesList}>
      {countries.map((country) => (
        <CountriesItem country={country} key={country.country} />
      ))}
    </ul>
  );
};

export default CountriesList;
