// Window confirm() Method

// confirm() instructs the browser to display a dialog with an optional message,
// and to wait until the user either confirms or cancels the dialog.



// ========================================



let ConfirmPost = confirm("Do you really want to delete this post?");

console.log(ConfirmPost);

if (ConfirmPost) {
    // Code to delete the post
    console.log("Your post has been deleted successfully");
}
else {
    // Code to cancel deletion of the post
    console.log("Your post has not been deleted");
};



// ========================================



// <button onclick="MyCode()">Click</button>

// <p id="code"></p>

// function MyCode() {
//     let text = "Press Ok Button";
//     if (confirm(text) == true) {
//         text = "Right Choice";
//     }
//     else {
//         text = "Wrong Choice";
//     }
//     document.getElementById("code").innerHTML = text;
// };



// ========================================