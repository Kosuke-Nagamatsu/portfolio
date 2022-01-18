import { HistoryLearningLog } from './HistoryLearningLog';
import { HistorySkill } from './HistorySkill';

const logs = [
  {
    month: '5月',
    title: 'DIVE INTO CODE へ入校',
    text: 'プログラミングスクールで学習を開始。\n平日10時〜19時はスクールで学び、土日は自己学習。'
  },
  {
    month: '8月',
    title: 'DIVE INTO CODE を卒業',
    text: 'オリジナルアプリ「離島マニア」を作成。\n「離島の情報が少ない。現地の体験談を知れたら旅行の計画が立てやすいのに。。」そのように感じた経験から、離島を知る機会を提供する。'
  },
  {
    month: '10月〜',
    title: 'コンテストに参加',
    text: 'グロービス経営大学院主催 GLOBIS Venture Challenge に外部から参加。ビジネス発案者1名、スクールの同期生1名と一緒に旅に関するアプリのプロトタイプを作成開始。ビデオ通話を組み込む方法を調べる過程で「ビデオチャット機能」を試作する。'
  }
]

const skills = [
  {
    field: 'フロントエンド',
    content: 'HTML, CSS, JavaScript, jQuery, React'
  },
  {
    field: 'バックエンド',
    content: 'Ruby'
  },
  {
    field: 'フレームワーク',
    content: 'Ruby on Rails, Bootstrap'
  },
  {
    field: 'データベース',
    content: 'PostgreSQL'
  },
  {
    field: 'API, SDK',
    content: 'OpenWeatherMap（天気予報）\nSkyWay（ビデオチャット）\nPAY.JP（クレジット決済）'
  }
]

export const History = () => {
  return (
    <>
      <HistoryLearningLog logs={logs} />
      <HistorySkill skills={skills} />
    </>
  );
}