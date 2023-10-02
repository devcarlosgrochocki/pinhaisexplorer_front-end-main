import React from "react";
import { useRouter } from "next/router";
import Select from "react-select";
import { TouristPointServices } from "../../../../src/services/modules/touristPoint";
import styles from "./styles.module.scss";

interface TouristPoint {
  id: number;
  name: string;
  url: string;
}

const SearchBar: React.FC = () => {
  const [data, setData] = React.useState<TouristPoint[]>([]);
  const [selectedOption, setSelectedOption] = React.useState<any | null>(null);
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);
  const router = useRouter();

  const fetchTouristPoints = async () => {
    try {
      const response = await TouristPointServices.getAllTouristPoint();
      console.log(response.data);
      setData(response.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchTouristPoints();

    function handleResize() {
      setIsSmallScreen(window.matchMedia("(max-width: 575px)").matches);
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // chamada inicial

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
    router.push("/ponto-turistico" + selectedOption.url);
  };

  const options = data.map((item) => ({
    value: item.name,
    label: item.name,
    url: item.url,
  }));

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      height: "3rem",
      borderRadius: "0.5rem",
      borderColor:
        state.isFocused || state.isSelected ? "#19d366" : "transparent",
      boxShadow: state.isFocused ? "0 0 0 1px #19d366" : null,
      "&:hover": {
        borderColor:
          state.isFocused || state.isSelected ? "#19d366" : "transparent",
      },
    }),
    placeholder: (provided: any) => ({
      ...provided,
      fontSize: isSmallScreen ? "12px" : provided.fontSize,
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#19d366" : provided.backgroundColor,
      "&:hover": {
        backgroundColor: "#19d366",
      },
    }),
  };

  return (
    <div className={styles.searchBar}>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        styles={customStyles}
        placeholder="Pesquise alguma informação em nosso site"
        maxMenuHeight={200}
      />
    </div>
  );
};

export default SearchBar;
