var debounce = require('mout/function/debounce');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      width: this.props.defaultWidth,
      height: this.props.defaultHeight
    };
  },

  onWidthChange: function (event) {
    let width = event.target.value,
      { minWidth, maxWidth } = this.props;

    this.setState({ width });

    if (width >= minWidth && width <= maxWidth)
      this.props.onWidthChange(width);
  },

  onHeightChange: function (event) {
    let height = event.target.value,
      { minHeight, maxHeight } = this.props;

    this.setState({ height });

    if (height >= minHeight && height <= maxHeight)
      this.props.onHeightChange(height);
  },

  onLocationChange: function (item) {
    this.props.onLocationChange(item);
  },

  onCategoriesChange: function (event) {
    this.props.onCategoriesChange(event.target.checked);
  },

  onProviderChange: function (event) {
    this.props.onProviderChange(event.target.value);
  },

  // TODO: generate these in template as well.
  // <div style={{margin: 0, padding: 0, display: 'inline'}}>
  // <input name="utf8" type="hidden" value="✓"/>
  // <input name="_method" type="hidden" value="put"/>
  // <input name="authenticity_token" type="hidden" value="ngHe6Fhv4/YgCQW/6Jh+seYArHZbGC2AoALgmk4dPko="/></div>
  render: function () {
    let { providers, providerId } = this.props;

    let providerOptions = providers.map(function (provider) {
      return {value: provider.id, label: provider.name, selected: providerId === provider.id};
    });

    let providerSelect = null;

    if (providerOptions.length > 0) {
      providerSelect = (
        <div className="form-group">
          <label className="control-label" htmlFor="widget_providers">
            <Translation scope={'users.profile.widget.providers'}/>
          </label>
          <div className="form-wrapper">
            <Select options={providerOptions} empty={I18n.t('users.profile.widget.empty_provider')} value={providerId}
                    onChange={this.onProviderChange} className="form-control"/>
          </div>
        </div>
      );
    }

    return (
      <div className="user-form">
        <form acceptCharset="UTF-8" className="form-horizontal formtastic widget" id="edit_widget"
              noValidate="novalidate">
          <fieldset className="inputs">
            <legend>
              <Translation scope={'users.profile.widget.legends.settings'}/>
            </legend>

            <div className="form-group">
              <label className="control-label" htmlFor="widget_center">
                <Translation scope={'users.profile.widget.center'}/>
              </label>
              <span className="form-wrapper">
                <Photon url={'http://photon.komoot.de/api/'} lang={Translation.locale} limit={10}
                        onSelectLocation={this.onLocationChange}/>
              </span>
            </div>
            <div className="form-group">
              <label className="control-label" htmlFor="widget_width">
                <Translation scope={'users.profile.widget.width'}/>
              </label>
              <span className="form-wrapper">
                <input className="form-control" id="widget_width" type="number" ref="width"
                       min={this.props.minWidth} max={this.props.maxWidth}
                       value={this.state.width} onChange={this.onWidthChange}/>
              </span>
            </div>
            <div className="form-group">
              <label className="control-label" htmlFor="widget_height">
                <Translation scope={'users.profile.widget.height'}/>
              </label>
              <span className="form-wrapper">
                <input className="form-control" id="widget_height" type="number" ref="height"
                       min={this.props.minHeight} max={this.props.maxHeight}
                       value={this.state.height} onChange={this.onHeightChange}/>
              </span>
            </div>

            {providerSelect}

            <div className="form-group">
              <label className="control-label" htmlFor="widget_categories">
                <Translation scope={'users.profile.widget.categories'}/>
              </label>
              <span className="form-wrapper">
                <input className="form-control" id="widget_categories"
                       name="widget[categories]" type="checkbox"
                       checked={this.props.categories}
                       onChange={this.onCategoriesChange}/>
              </span>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
});
