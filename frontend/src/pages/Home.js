import { useThemeContext } from "../contexts/themeContext";
import { useFormContext } from "../contexts/formContext";
import { Banner } from "../components/Banner";
import { Form } from "../components/Form";
import { CocktailsContainer } from "../components/Cocktails/CocktailsContainer";
import homeFormSectionImgLeft from "../assets/images/bacchus-7330206_1280.png";
import homeFormSectionImgLeftDark from "../assets/images/champagne-29051_1280.png";
import homeFormSectionImgRightDark from "../assets/images/image_fx_fhoto_of_a_smiling_statue_woman.jpg";
import homeFormSectionImgRight from "../assets/images/cup-5215986_1280.png";
// "image_fx_fhoto_of_a_happy_greek_statue_enjoying_the_wi.jpg"
// "drink-2029520_1280.png"
// "bacchus-7330206_1280.png"
// "glass.png"
// "glass-29509_640.png"
// "champagne-29051_1280.png"
// "champagne-29051_1280.png"
// "the-statue-3099675_1280.png"
// "cup-5215986_1280.png"
// "image_fx_fhoto_of_a_smiling_statue_woman.jpg"

export const Home = () => {
  // state for theme context

  const { isDarkTheme } = useThemeContext();

  // state for search queries
  const { querySubmitted, setQuerySubmitted, query, setQuery, data, setData } =
    useFormContext();

  return (
    <div className="theme">
      <Banner />
      <div className="homeFormSection">
        <img
          src={
            isDarkTheme ? homeFormSectionImgLeftDark : homeFormSectionImgLeft
          }
          alt="cocktail"
          className="homeImageLeft"
        />
        <Form
          query={query}
          setQuery={setQuery}
          setQuerySubmitted={setQuerySubmitted}
          querySubmitted={querySubmitted}
          templateExplore="" // empty string to remove formStyleExplore class
        />
        <img
          src={
            !isDarkTheme ? homeFormSectionImgRight : homeFormSectionImgRightDark
          }
          alt="cocktail"
          className={`homeImageRight ${!isDarkTheme}`}
        />
      </div>
      <CocktailsContainer
        query={query}
        setQuery={setQuery}
        data={data}
        setData={setData}
        querySubmitted={querySubmitted}
        setQuerySubmitted={setQuerySubmitted}
      />
    </div>
  );
};
