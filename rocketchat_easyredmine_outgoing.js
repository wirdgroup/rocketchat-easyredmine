class Script {
    /**
     * @params {object} request
     */
    prepare_outgoing_request({ request }) {
        const trigger = request.data.trigger_word.toLowerCase();
        const phrase = request.data.text.toLowerCase().replace(trigger, '').replace(/ /g, '');
        let u = '';
        let key = 'INSERTYOURAPIKEY';
        u = request.url + phrase + '.xml?include=&key=' + key;
        return {
            phrase: phrase,
            custom: request.url + phrase,
            url: u,
            headers: request.header,
            method: 'GET'
        };
    }

    process_outgoing_response({ request, response }) {
        var subject = response.content_raw.match(/(?<=<subject>)(.*)(?=<\/subject>)/g);
        var assigned_to = response.content_raw.match(/(?<=<assigned_to id\=\"\d+\" name\=\")(.*)(?=\" avatar=")/g);
        var description = response.content_raw.match(/(?<=<description>)([\S\s]*?)(?=<\/description>)/g);
        var author = response.content_raw.match(/(?<=<author id\=\"\d+\" name\=["'])(.*?)(?=["']\/>)/g);
        var due_date = response.content_raw.match(/(?<=<due_date>)(.*)(?=<\/due_date>)/g);
        let textCustom = '**Author:**\n' + author + '\n\n**Description:**\n' + description + '\n\n**Due date:**\n' + due_date + '\n\n**Assigned to:**\n' + assigned_to
        return {
            content: {
                attachments: [{
                    title: '#' + request.phrase + ' ' + subject,
                    title_link: request.custom,
                    text: textCustom,
                }]
            }
        };
    }
}
