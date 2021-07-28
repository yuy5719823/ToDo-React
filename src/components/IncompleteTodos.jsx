import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            //ループ処理で返却する場合一番親のタグにキーを追加する必要がある
            //仮想DOMでは差分を抽出するため何個目の要素なのか正確に教える必要があるため
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                {/* onClickDelete(index)のように関数に値を渡すときはアロー関数で関数を新しく生成する必要がある */}
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
