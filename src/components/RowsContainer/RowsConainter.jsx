import React from 'react';
import { ACTION, COMEDY, DOCUMENTARIES, HORROR, POPULAR, ROMANCE, TOP_RATED, TRENDING } from '../../api';
import CustomSwiper from '../Swiper/CustomSwiper';

export default function RowsConainter() {
  return <>
<CustomSwiper title='Popular Movies' request={POPULAR}/>
  <CustomSwiper title='Top Rated Movies' request={TOP_RATED}/>
  <CustomSwiper title='Trending Movies' request={TRENDING}/>
  <CustomSwiper title='Action Movies' request={ACTION}/>
  <CustomSwiper title='Comedy Movies' request={COMEDY}/>
  <CustomSwiper title='Horror Movies' request={HORROR}/>
  <CustomSwiper title='Romance Movies' request={ROMANCE}/>
  <CustomSwiper title='Documentaries Movies' request={DOCUMENTARIES}/>
  </>;


}
