import $ from 'jquery';

class MyNotes {
  constructor() {
    this.events();
  }

  events() {
  $(".delete-note").on("click", this.deleteNote);
  }

  // Methods go here 
  deleteNote() {
    $.ajax({
      beforeSend: (xhr) => {
        xhr.setRequestHeader('X-WP-Nonce', universityData.nonce);
      },
      url: universityData.root_url + '/wp-json/wp/v2/note/116',
      type: 'DELETE',
      success: (response) => {
        console.log("success!");
        console.log(response);
      },
      error: (response) => {
        console.log("error!");
        console.log(response);
      }
    });
  }
}

export default MyNotes;
