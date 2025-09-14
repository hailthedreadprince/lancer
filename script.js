$('#terminal').terminal(function(command, term) {
    const cmd = $.terminal.parse_command(command);

    if (cmd.name === 'play') {
        term.echo("play")
    } else {
        term.echo(`Unknown command: ${cmd.name}`);
    }
}, {
    prompt: '> ',
    greetings: 'Welcome to the combined terminal!',
//   keydown: function(e, term) {
//        if (isProgressRunning && e.ctrlKey && e.which === 68) {
//            cancelProgress(term); // from progress_bar.js
//            return false;
//        }
//    }
});
