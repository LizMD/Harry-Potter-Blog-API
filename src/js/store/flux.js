const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      fav: [],
      gryffindor: [],
      ravenclaw: [],

      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      //=>función de los favs
      addFav: (name) => {
        const store = getStore();
        console.log(name, store.fav.lenght);
        if (!store.fav.lenght) {
          setStore({ fav: [...store.fav, { name: name }] });
        } else {
          store.fav?.forEach((elm) => {
            if (elm.name == name) {
              console.log("existe");
            } else {
              setStore({ fav: [...store.fav, { name: name }] });
            }
          });
        }
      },
      deleteFav: (name) => {
        console.log(name);
        const store = getStore();
        const filteredFav = store.fav.filter((obj) => obj.name !== name);
        setStore({
          fav: filteredFav,
        });
      },
      getGryffindor: () => {
        fetch("https://hp-api.herokuapp.com/api/characters/house/gryffindor")
          .then((res) => res.json())
          .then((info) => setStore({ gryffindor: info }))
          .catch((error) => console.log("DANGER", error));
      },
      getRavenclaw: () => {
        fetch("https://hp-api.herokuapp.com/api/characters/house/ravenclaw")
          .then((res) => res.json())
          .then((info) => setStore({ ravenclaw: info }))
          .catch((error) => console.log("DANGER", error));
      },
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
