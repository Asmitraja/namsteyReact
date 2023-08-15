// for making nested element
//  <div>
//     <div>
//         <h1> hii i m heading h1 tag</h1>
//     </div>
//  </div>


const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "hii i m heading h1 tag"), React.createElement("h2", {}, " i m h2 tag")]
    ), React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "hii i m heading h1 tag"), React.createElement("h2", {}, " i m h2 tag")]
    )]);

console.log(parent); //object

// const heading = React.createElement("h1",{id:"heading"},"Hello World from REact js");

const root = ReactDOM.createRoot(document.getElementById("raja"));
//     // root.render(heading);
root.render(parent);