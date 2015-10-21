/**
 * Interrobang.js - Better Punctuation For A Brighter Tomorrow
 *
 * This tiny, seemingly unassuming script is anything but. Oh no, dear friend.
 * Interrobang.js _assumes_ you want to up your content by taking your
 * punctuation to the next level. Gone are the days of blaze faire ?!
 * and ???!!!. Indeed, now your prose can be rid of such syntactical
 * litter and upgrade to the stylish and sophisticated ‽.
 *
 * @version 1.0.0
 * @author Mike Branski (@mikebranski)
 * @link https://github.com/mikebranski/interrobang-js GitHub
 * @license http://www.gnu.org/licenses/lgpl-3.0.txt LGPL v3.0
 */

/**
 * @param DOMElement target The DOM element on which to perform the ~~seek and
 *                          destroy~~ find and replace.
 */
function punctuationEmbetterment(target) {
  var content = target.innerHTML;

  // Match all instances of two consecutive ? and/or ! (we'll
  // filter in the match function to ensure it contains, at a
  // minimum, one ? and one !).
  content = content.replace(/[?!]{2,}/g, function(match) {
    var string,
        offset;

    // Match is always the first parameter, and offset and string
    // the last two; inbetween are any matches in the pattern.
    // Let's fix that.
    string = arguments[arguments.length];
    offset = arguments[arguments.length - 1];

    // If the match doesn't contain at least one ? and one !,
    // do nothing to the string.
    if (match.indexOf("?") === -1 || match.indexOf("!") === -1) {
      return match;
    }

    // Return a number of interrobangs (‽) equal to half as many
    // characters in the original match, rounded down.
    // WTB: ES2015's String.prototype.repeat(n);
    return Array(Math.floor(match.length / 2) + 1).join("‽");
  });

  // Update the target's inner HTML with the new content string.
  target.innerHTML = content;
}

// Example usage interrobanging the body.
punctuationEmbetterment( document.querySelector("body") );
