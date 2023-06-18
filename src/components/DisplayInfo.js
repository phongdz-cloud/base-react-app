import React from "react";
import "./DisplayInfo.scss";
// class DisplayInfo extends React.Component {
//   render() {
//     console.log(">>> call me render");
//     // desctructuring array/object
//     const { listUsers } = this.props;
//     // props => viết tắt property

//     return (
//       <div className="display-infor-container">
//         {true && (
//           <>
//             {listUsers.map((user) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div>My name's {user.name} </div>
//                   <div>My age's {user.age} </div>
//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUser(user.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfo = (props) => {
  const { listUsers } = props;
  return (
    <div className="display-infor-container">
      {true && (
        <>
          {listUsers.map((user) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>My name's {user.name} </div>
                <div>My age's {user.age} </div>
                <div>
                  <button onClick={() => this.props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfo;
