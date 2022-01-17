import { WorkContent } from './WorkContent';
import { PageTitle } from '../../common/PageTitle';

const works = [
  {
    name: '離島マニア',
    text: '見たい投稿へすぐに辿り着けるよう検索機能を作成。検索結果を非同期処理で表示し、フォームでキーワードを入力, 選択した直後に自動で検索されるようにした。',
    url: 'https://limitless-beyond-47766.herokuapp.com',
    github: 'https://github.com/Kosuke-Nagamatsu/ritomania.git',
    image: 'images/work1_img.jpg'
  },
  {
    name: 'ビデオチャット機能',
    text: '相手の名前を選択後にボタン一つで通話できるように拡張。SDKのデフォルトでは、通話画面へ来るたびに違うID（電話番号）が作られるため、電話番号を固定し簡単に通話できるようにしたいと考えた。そこで、ユーザー登録時に固定IDを作成し電話番号に指定することで形にした。',
    url: 'https://sleepy-tundra-99075.herokuapp.com',
    github: 'https://github.com/Kosuke-Nagamatsu/test_SkyWay.git',
    image: 'images/work2_img.jpg'
  },
  {
    name: 'ポートフォリオ',
    text: 'Reactに初めて触れた際に魅力を感じ、ポートフォリオサイトをReactで作成。モバイルフレンドリー、シンプルで見やすいレイアウトを意識した。',
    url: 'https://kosuke-nagamatsu.github.io/portfolio/',
    github: 'https://github.com/Kosuke-Nagamatsu/portfolio.git',
    image: 'images/work3_img.jpg'
  }
]

export const Work = () => {
  return (
    <>
      <PageTitle>制作物</PageTitle>
      <WorkContent works={works} />
    </>
  );
}


