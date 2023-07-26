/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState  } from 'react';
import { searchForShows , searchForpeople } from './../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import ActorsGrid from '../components/actors/ActorsGrid';
import { useQuery } from '@tanstack/react-query';
import { TextCenter } from '../components/common/TextCenter';

const Home = () => {
  const [filter,setFilter] = useState(null);

  


  const {data : apiData,error : apiDataError} = useQuery({

      queryKey: ['search', filter],
      queryFn: () =>
       filter.searchOption === 'shows'
      ? searchForShows(filter.q)
      :searchForpeople(filter.q),
      
      enabled:!!filter,
      refetchOnWindowFocus: false,

  });
const onSearch = async ({q,searchOption})  => {
   setFilter ({q, searchOption});
};
  const renderApiData = () => {
    if (apiDataError) {
      return <TextCenter>Error occured:{apiDataError.message}</TextCenter>;
    }

    if (apiData?.length === 0){
      return<TextCenter>No results</TextCenter>

    }
    if (apiData) {
      return apiData[0].show ? (
      <ShowGrid shows={apiData}/>
      ):(
      <ActorsGrid actors={apiData}/>
      );
    }
    return null;
  };
  return (
    <TextCenter>
     
    <SearchForm onSearch={onSearch}/>
     
           <TextCenter>{renderApiData()}</TextCenter>
    </TextCenter>
  );
};

export default Home;