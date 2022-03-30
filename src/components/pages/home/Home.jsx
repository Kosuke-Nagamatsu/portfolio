import styled from '@emotion/styled';
import { HomeContent } from './HomeContent';
import { createPetal } from '../../../hooks/createPetal';

const text = '永松 孝友（ながまつ こうすけ）です。\n\nハンドボールや営業、夢中になったことを通して、出来ないことが出来るようになったときに喜びを感じてきました。\n\n今エンジニアを目指していますが、今後も出来ることを増やし、周りに良い影響を与えれる人でいたいと考えています。';

export const Home = () => {

  // 指定のミリ秒ごとに花びらを作る
  setInterval(createPetal, 500);

  return (
    <SDiv className='cherry-blossom-container'>
      <HomeContent text={text} />
    </SDiv>
  );
}

// const SDiv = styled.div`
//   background: url('images/home_bg_img.jpg') no-repeat center center;
//   background-size: cover;
//   min-height: 100vh;
// `

const SDiv = styled.div`
  min-height: 100vh;
`