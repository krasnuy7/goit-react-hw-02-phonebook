import React from "react";

const UlLi = (props) => {
  let { info } = props;
  if (info.contacts.length > 2) {
    const filt = info.contacts.filter((user) =>
      user.name.toUpperCase().includes(info.filter.toUpperCase())
    );

    const markup = filt.map((user) => {
      return (
        <li key={user.id}>
          {user.name} {user.number}
          <button onClick={props.deleteUsers} id={user.id}>
            Удалить
          </button>
        </li>
      );
    });
    return <>{markup}</>;
  } else {
    const markup = info.contacts.map((user) => {
      return (
        <li key={user.id}>
          {user.name} {user.number}
          <button onClick={props.deleteUsers} id={user.id}>
            Удалить
          </button>
        </li>
      );
    });
    return markup;
  }
};

export default UlLi;
