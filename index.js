function shout(string) {
    return string.toUpperCase();
  };
  function whisper(string) {
    return string.toLowerCase();
  };
 function logShout(string) {
    console.log(string.toUpperCase());
 };
 logShout("Hello");
 function logWhisper(string) {
    console.log(string.toLowerCase());
 };
 logWhisper("Hello");
 function sayHiToHeadphonedRoommate(string) {
   let lcString = "I can\'t hear you!";
   let ucString = "YES INDEED!";
   let dinString = "I would love to!";
   if (string === string.toLowerCase(string)) {
     return(lcString);
   }
   else if (string === string.toUpperCase(string)) {
      return (ucString);
   }
   else if ("Let\'s have dinner together!" === string) {
      return (dinString);
   }
 };
 sayHiToHeadphonedRoommate ("HELLO");
 sayHiToHeadphonedRoommate ("hello");
 sayHiToHeadphonedRoommate ("Let\'s have dinner together!");

