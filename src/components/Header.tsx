import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>ホーム</Link>
          </li>
          <li>
            <Link to='/signup'>ユーザー登録</Link>
          </li>
          <li>
            <Link to='/login'>ログイン</Link>
          </li>
          <li>
            <Link to='/logout'>ログアウト</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
