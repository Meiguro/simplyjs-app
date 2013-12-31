/* global simply */

simply.text({
    title: 'Hello!',
    subtitle: 'How are you?',
}, true);

simply.on('singleClick', function() {
   simply.body("I'm doing great!"); 
});