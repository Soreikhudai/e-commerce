import { useContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import CartContext from "../../Context/cart-context";
import { getDatabase, onChildAdded, ref, remove } from "firebase/database";

function CartOperation() {
  const database = getDatabase();
  const auth = getAuth();
  const Data = useContext(CartContext);

  // Export a function that can be called from the button click event
  const AddDelete = async (details, action) => {
    return onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (action === "add") {
          try {
            const response = await fetch(
              `https://react-http-project-da8f6-default-rtdb.firebaseio.com/cart/${user.email
                .replace("@", "")
                .replace(".", "")}.json`,
              {
                method: "POST",
                body: JSON.stringify(details),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            if (!response.ok) {
              throw new Error("request failed");
            }
            const data = await response.json();
            Data.addItem(data);
          } catch (error) {
            alert("something went wrong");
            console.error(error);
          }
        } else if (action === "remove") {
          const cartRef = ref(
            database,
            `cart/${user.email.replace("@", "").replace(".", "")}`
          );
          onChildAdded(cartRef, (snapshot) => {
            const item = snapshot.val();
            if (item.id === details.id) {
              // Remove the item from the database
              const itemRef = ref(
                database,
                `cart/${user.email.replace("@", "").replace(".", "")}/${
                  snapshot.key
                }`
              );
              remove(itemRef)
                .then((res) => {
                  Data.addItem(res);
                })
                .catch((error) => {
                  console.error("Error deleting item: ", error);
                });
            }
          });
        }
      } else {
        console.log("User is not signed in.");
      }
    });
  };

  // Return the AddDelete function in an object that can be exported
  return { AddDelete };
}

export default CartOperation;
