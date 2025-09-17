$('#terminal').terminal(async function(command, term) {
    const cmd = $.terminal.parse_command(command);

    if (cmd.name === 'startup') {
        //TODO add startup animation
        term.exec("mainMenu", {silent:true})
    }else if (cmd.name === 'mainMenu'){
        task =await selectFromList(term, "Select Task", ["1. View operations", "2. View remote connections", "3. View Mechs", "4. View diagnostics"]);
        term.echo(task);
        if (task===1){
            //View operations
            op = await selectFromList(term, "Select Operation", ["1. Operation Communism"])
            if (op===1){
                //Operation Communism

            }else{term.echo("ERROR")}
        }else if (task===2){
            //Remote connections
            connection= await selectFromList(term, connectionsList.innerHTML, [`1  |Prison     |  ESTAB  | 04e8:dabf:f486:c83e:7dd0:3673:a969:390c |            Unknown            |
`]);
        }else if (task===3){
            //Mechs
        }else if (task===4){
            // Diagnostics
        }else {term.echo("ERROR")}
    } else if (cmd.name === 'progress'){
        var time = cmd.args[0];
        var width = cmd.args[1];
        
    } else {
        term.echo(`Unknown command: ${cmd.name}`);
    }
}, {
    prompt: '> ',
    greetings: startup.innerHTML,
    onInit: function(term) {
        //run after term initializes
        term.exec('startup', {silent:true});
    }
});
