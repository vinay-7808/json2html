// Exporting the json2html function as a default export
export default function json2html(data) {
    // Start the table and add a custom data attribute
    let html = '<table data-user="vinay211113233@gmail.com">';

    // Generate the table headers dynamically from the keys of the first object
    if (data.length > 0) {
        html += '<thead><tr>';
        Object.keys(data[0]).forEach(key => {
            html += `<th>${key}</th>`;
        });
        html += '</tr></thead>';
    }

    // Generate the table body
    html += '<tbody>';
    data.forEach(obj => {
        html += '<tr>';
        Object.keys(data[0]).forEach(key => {
            // Add each cell, using an empty string if the key doesn't exist in this object
            html += `<td>${obj[key] || ''}</td>`;
        });
        html += '</tr>';
    });
    html += '</tbody>';

    // Close the table and return the HTML string
    html += '</table>';
    return html;
}
