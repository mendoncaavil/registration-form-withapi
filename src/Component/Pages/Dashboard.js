import React, { useState, useEffect, useContext } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import "./Dashboard.css";
import { AppContext } from "../../Context";
import DeleteIcon from "@mui/icons-material/Delete";
import CircularProgress from "@mui/material/CircularProgress";
import Carousel from "react-bootstrap/Carousel";

// import { connect } from "react-redux";
// import { setTableData } from "../../Store/Actions/TableAction";

function Dashboard() {
  const { items } = useContext(AppContext);
  const [data, setData] = items;
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    const productArray = [];
    const response = await axios.get("https://dummyjson.com/products");
    console.log(response);
    console.log(response.data.products);
    response.data.products.map((item) => {
      productArray.push({
        id: item.id,
        title: item.title,
        description: item.description,
        price: item.price,
        img: item.images,
        rating: item.rating,
      });
    });

    setData(productArray);
    setLoading(false);
    // console.log(productArray)
    // }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user.isLoggedIn) {
      getProducts();
    } else {
      window.location.replace("/login");
    }
  }, []);

  const deleteRow = (id) => {
    const newArray = data.filter((row) => {
      return row.id != id;
    });

    setData(newArray);
  };

  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          <Table className="table_container" responsive>
            <tbody>
              <tr>
                <th>Sr. No</th>
                <th>Product</th>
                <th>Product Info</th>
                <th>Price</th>
                <th>Images</th>
                <th>Ratings</th>
                <th>Delete Product</th>
              </tr>
              {data.map((item, id) => {
                return (
                  <tr key={item.id}>
                    <td>{id + 1}</td>
                    <td className="item_title">{item.title}</td>
                    <td className="item_description">{item.description}</td>
                    <td className="item-price">${item.price}</td>

                    <td className="images_container">
                      <Carousel>
                        {item.img.map((_img, img_Id) => {
                          return (
                            <Carousel.Item>
                              <img
                                src={_img}
                                className="images_img className=d-block w-100"
                                key={img_Id}
                              />
                            </Carousel.Item>
                          );
                        })}
                      </Carousel>
                    </td>

                    <td>{item.rating}</td>

                    <td>
                      <DeleteIcon
                        onClick={() => deleteRow(item.id)}
                        className="delete_icon"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
}

// const mapStateToProps = (store) => {
//   console.log("state on router", store);
//   return {
//     item: store.tableReducer.items,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setData: (data) => dispatch(setTableData(data)),

//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

export default Dashboard;
