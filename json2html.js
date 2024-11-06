// Exporting the json2html function as a default export
export default function json2html(data) {
    // Define the required headers
    const headers = ['Name', 'Age', 'Gender'];

    // Start the table and add a custom data attribute
    let html = '<table data-user="vinay211113233@gmail.com">';

    // Generate the table headers
    html += '<thead><tr>';
    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });
    html += '</tr></thead>';

    // Generate the table body
    html += '<tbody>';
    data.forEach(obj => {
        html += '<tr>';
        headers.forEach(header => {
            // Add each cell, check if the object has the key, otherwise use an empty string
            html += `<td>${obj[header] || ''}</td>`;
        });
        html += '</tr>';
    });
    html += '</tbody>';

    // Close the table and return the HTML string
    html += '</table>';
    return html;
}
