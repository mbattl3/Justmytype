
$(document).ready(function () {
$('#keyboard-upper-container').hide();

    $(document).keydown(function (event) {
        if (event.which == 16) {
            $('#keyboard-upper-container').toggle();
            $('#keyboard-lower-container').toggle();
        }
    })


    let sentences = [
        "ten ate neite ate nee enet ite ate inet ent eate",
        "Too ato too nOt enot one totA not anot tOO aNot",
        "oat itain oat tain nate eate tea anne inant nean",
        "itant eate anot eat nato inate eat anot tain eat",
        "nee ene ate ite tent tiet ent ine ene ete ene ate",
      ];
    let sentenceIndex = 0;
    let charIndex = 0;
    let move = 15

    $('#sentence').html(sentences[sentenceIndex]);

    if (charIndex == 0){
        $('#target-letter').html(sentences[sentenceIndex].charAt(charIndex[0]))
    }

    $(document).keypress(function (event) {
        if (event.which === event.keyCode) {
            $('#' + event.keyCode).toggleClass('highlight-key')
        }
        if (sentenceIndex === 5) {
            return;
        }
        $('#target-letter').html(sentences[sentenceIndex].charAt(charIndex+1))
        console.log(sentences[sentenceIndex].charAt(charIndex))
        charIndex++;
        console.log(charIndex);
        console.log(sentences[sentenceIndex].length)
        if (charIndex === sentences[sentenceIndex].length) {
            sentenceIndex++;
            move = 15;
            charIndex = 0;
            $('#sentence').html(sentences[sentenceIndex]);
        }
        $('#yellow-block').css({ left: move })
        move += 17;
        
    })

    $(document).keyup(function (event) {
        if (event.which == 16) {
            $('#keyboard-upper-container').toggle();
            $('#keyboard-lower-container').toggle();
        }
        if (event.which === event.keyCode) {
            $('.key').removeClass('highlight-key')
        }
    })

})