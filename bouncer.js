// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
   var filtered = arr.filter(compared);
   return filtered;

  function compared(value){
    return Boolean(value);
  }
}

bouncer([7, "ate", "", false, 9]);
