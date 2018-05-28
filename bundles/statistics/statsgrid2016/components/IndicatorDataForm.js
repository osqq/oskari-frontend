/**
 * Generic form for feeding values for regions. Triggers events on cancel and save.
 */
Oskari.clazz.define('Oskari.statistics.statsgrid.IndicatorDataForm', function (locale) {
    this.locale = locale;
    this.selectors = {};
    this.element = this.createUi();
    Oskari.makeObservable(this);
}, {
    __templates: {
        main: _.template('<div class="user-indicator-main"></div>'),
        insertTable: _.template('<table class="user-indicator-table">' +
                                        '<tbody></tbody>' +
                                '</table>'),
        header: _.template('<div class="user-indicator-specification">' +
                                '<div>${regionsetLabel}: ${regionset}</div>' +
                                '<div>${yearLabel}: ${year}</div>' +
                            '</div>'),
        row: _.template('<tr data-id="${regionId}">' +
                            '<td class="region" style=" border: 1px solid black ;">${regionName}</td>' +
                            '<td class="uservalue" contenteditable=true style=" border: 1px solid black ;">${value}</td>' +
                        '</tr> '),
        import: _.template('<div class="user-indicator-import"><textarea placeholder="${placeholder}"></textarea></div>')
    },
    getElement: function () {
        return this.element;
    },
    createUi: function () {
        if (this.getElement()) {
            return this.getElement();
        }
        return jQuery(this.__templates.main());
    },
    clearUi: function () {
        if (!this.getElement()) {
            return;
        }
        this.getElement().empty();
    },
    fillTable: function (data) {
        var table = this.getElement().find('.user-indicator-table');
        data.forEach(function (iteration) {
            table.find('tr').filter(function (index, tr) {
                if (tr.innerText.trim() === iteration.name || tr.dataset.id === iteration.name) {
                    jQuery(tr).find('td.uservalue').text(iteration.value);
                }
            });
        });
    },
    showTable: function (selectors, regions, labels) {
        var me = this;
        this.clearUi();
        labels = labels || {};
        this.selectors = selectors || {};

        var header = this.__templates.header({
            regionsetLabel: this.locale('panels.newSearch.regionsetTitle'),
            yearLabel: this.locale('parameters.year'),
            regionset: labels[selectors.regionset] || selectors.regionset,
            year: labels[selectors.year] || selectors.year
        });
        this.getElement().append(header);

        var tableRef = jQuery(this.__templates.insertTable());
        regions.forEach(function (region) {
            tableRef.append(me.__templates.row({
                regionId: region.id,
                regionName: region.name,
                value: region.value || ''
            }));
        });
        this.getElement().append(tableRef);
        // Focus on the first input cell
        tableRef.find('tr td.uservalue')[0].focus();
        var cancelBtn = Oskari.clazz.create('Oskari.userinterface.component.buttons.CancelButton');
        cancelBtn.insertTo(this.getElement());
        cancelBtn.setHandler(function () {
            me.trigger('cancel');
            me.clearUi();
        });
        var importClipboard = Oskari.clazz.create('Oskari.userinterface.component.buttons.AddButton');
        importClipboard.insertTo(this.getElement());
        importClipboard.setTitle('Tuo leikepöydältä');
        importClipboard.setHandler(function (event) {
            me.openImportPopup();
        });
        var showTableBtn = Oskari.clazz.create('Oskari.userinterface.component.buttons.AddButton');
        showTableBtn.insertTo(this.getElement());
        showTableBtn.setHandler(function () {
            me.trigger('save', me.getValues());
        });
    },
    getValues: function () {
        var table = this.getElement().find('table');
        var data = {
            selectors: this.selectors,
            values: []
        };
        table.find('tr').each(function (index, element) {
            var row = jQuery(element);
            var columns = row.find('td');
            var dataItem = {
                id: row.attr('data-id'),
                name: columns[0].innerText,
                value: columns[1].innerText.trim()
            };
            if (dataItem.value !== '' && !Number.isNaN(dataItem.value)) {
                // only include rows with values and cast value to number as legend expects it to be a number
                dataItem.value = dataItem.value.replace(/,/g, '.');
                dataItem.value = Number(dataItem.value);
                data.values.push(dataItem);
            }
        });
        return data;
    },
    openImportPopup: function () {
        var me = this;
        var popup = Oskari.clazz.create('Oskari.userinterface.component.Popup');
        popup.makeDraggable();
        var content = jQuery(this.__templates.import({
            placeholder: me.locale('userIndicators.import.placeholder')
        }));
        var okBtn = Oskari.clazz.create('Oskari.userinterface.component.buttons.OkButton');

        okBtn.setPrimary(true);
        okBtn.setHandler(function () {
            var textarea = content.find('textarea');
            var data = me.parseUserData(textarea);
            me.trigger('import.user.data', data);
            popup.close(true);
        });
        var cancelBtn = Oskari.clazz.create('Oskari.userinterface.component.buttons.CancelButton');
        cancelBtn.setHandler(function () {
            popup.close(true);
        });
        popup.show(me.locale('userIndicators.import.title'), content, [cancelBtn, okBtn]);
    },
    parseUserData: function (textarea) {
        var data = textarea.val();
        var validRows = [];

        var lines = data.match(/[^\r\n]+/g);
        // loop through all the lines and parse municipalities (name or code)
        _.each(lines, function (line) {
            var area,
                value;

            // separator can be tabulator, comma or colon
            var matches = line.match(/([^\t;,]+) *[\t;,]+ *(.*)/);
            if (matches && matches.length === 3) {
                area = matches[1];
                value = (matches[2] || '').replace(',', '.').replace(/\s/g, '');
            }
            validRows.push({
                'name': area.trim(),
                'value': value
            });
        });
        return validRows;
    }
});
