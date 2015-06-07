Meteor.subscribe('comments');
AutoForm.hooks({
  insertRootCommentForm:{
    before:{
     insert:function(doc){
        doc.authorID = Meteor.userId();
        doc.createDate = new Date();
        return doc;
       }
     }
  },
  insertReplyCommentForm: {
    before:{
     insert:function(doc){
        doc.authorID = Meteor.userId();
        doc.createDate = new Date();
        return doc;
       }
     }
  },
  updateCommentForm: {
    after:{
     update:function(error, result){
        $('#editCommentModal').closeModal();
       }
     }
  }
});