export default function (server) {

   // Seed your development database using your factories. This
   // data will not be loaded in your tests.

   // server.createList('contact', 10);

   var bug = server.create('bug');

   server.createList('comment', 2, {bug_id: bug.id});

}
