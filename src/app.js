window.onload = function() {
  //write your code here
  const excuse = document.querySelector("#excuse");
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  function random(max) {
    let result = Math.floor(Math.random() * max);
    return result;
  }
  excuse.innerHTML = `${who[random(who.length)]} ${
    action[random(action.length)]
  } ${what[random(what.length)]} ${when[random(when.length)]}`;
};
