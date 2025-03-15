## 開発のはじめ方

1. `git clone -b kanade-dev https://github.com/gdsc-tmu/event5-unity.git`をターミナルで実行，または「<> Code ▼」から zip ファイルをダウンロード＋解凍
2. VSCode で，ダウンロードしたフォルダ（package.json があるフォルダ）を開く
3. VSCode で cmd+j を押し，ターミナルを開く
4. `npm i`を実行し，依存関係をインストールする
5. インストールが終了したら`npm run dev`を実行する
6. ブラウザで`http://localhost:5173/event5-unity/`にアクセスするとサイトが確認できる

7. ページの情報は`src/Pages/<エンドポイント名>/page.jsx`内にあります
8. 例えば，`https://gdsc-tmu.github.io/event5-unity/questions/`，`http://localhost:5173/event5-unity/questions/`のデータは[src/Pages/questions/page.jsx](./src/Pages/questions/page.jsx)にあります．
9. page.jsx 内に HTML っぽい部分（React で用いられている「JSX」と呼びます）がありますが，これがサイトに表示されています．時折`<Box>`や`<Typography>`，`<Stack>`など見慣れないタグがありますが，これらは[Material UI](https://mui.com/material-ui/getting-started/)のもので，リンクからそのタグの詳細を確認できます．
10. ほかにも HTML では見慣れない，MUI にもないタグがありますが（questions/page.tsx の場合`<HeadCard/>`など）これらはコードを書く人（私）が自分で作れるタグで，F12+クリックで定義に移動できます．そこで書かれている JSX が先程の`<HeadCard/>`のようなところで展開されています．

11. また，トップページ`https://gdsc-tmu.github.io/event5-unity/`，`http://localhost:5173/event5-unity/`のデータは特別に`src/TopPage.jsx`に記載されています．
12. ピン留めする記事，GAS の設定は`src/Configs`の中にあります．

## 新しいページを作りたいとき

`src/Pages/`ディレクトリ配下に，作りたいエンドポイント名のディレクトリを作成し，そのなかに`page.jsx`を作成すると，自動でページとして認識されます．
例えば，`https://gdsc-tmu.github.io/event5-unity/chromekun_page`を作成したい場合，`src/Pages/chromekun_page/page.jsx`を作成するとページとして認識されます．これだけだとエラーを吐いてしまうので，page.jsx に以下の雛形を書いて保存してください．

```
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page
```

このコードの`<div>Page</div>`は，ほぼ HTML と同様に書けるので，`<div> <div>こんにちは</div> </div>`のように書き換えると「こんにちは」と表示されます．
※「ほぼ HTML」というのは，JSX のルールで，以下のようなルールがあるからです．

❎️ NG 例

```
<div>こんにちは</div>
<div>クロームくんです</div>

<br>

```

✅️ OK 例

```
⚠️複数のタグがあるときは，それらを囲って単一のタグの中に入れないといけない
<div>
   <div>こんにちは</div>
   <div>クロームくんです</div>

   ⚠️brなど，終了タグがないタグは，スラッシュを入れないといけない
   <br/>
</div>

```

これ以外は通常の HTML と同様に書けます．

## デプロイ（本番環境へのアップロード）のやり方

1. 一通り動くか軽く確認する
   1. トップページ表示
   2. 質問ページ表示
2. `npm run deploy`を実行する

## 使用している技術（主要）

- React
- MUI(Material UI)
- Tailwind CSS

メインは React ＋ MUI で，ほんの少し（5%くらい）TailWind CSS を使っています．

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Third-Party Licenses

This project uses third-party libraries with the following licenses:

- MIT: 198
- Apache-2.0: 15
- ISC: 13
- BSD-2-Clause: 6
- BSD-3-Clause: 5
- MPL-2.0: 2
- Apache-2.0 AND MIT: 1
- Python-2.0: 1

All dependencies and their respective licenses can be found in the `licenses.txt` file.

Some code examples from [MUI](https://mui.com/material-ui/) are used in this project.

special thanks: https://github.com/rafgraph/spa-github-pages
