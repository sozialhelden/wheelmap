module.exports = React.createClass({
  // propTypes: {
  //   height: React.PropTypes.string,
  //   width: React.PropTypes.string
  // },

  // getInitialState: function () {
  //   return {
  //     height: this.props.height,
  //     width: this.props.width
  //   };
  // },

  handleUpdate: function (widget) {
    this.props.handleUpdate(widget);
  },

  onWidthChange: function (e) {
    this.props.onWidthChange(e.target.value);
  },

  onHeightChange: function (e) {
    this.props.onHeightChange(e.target.value);
  },

  onLocationChange: function (item) {
    this.props.onLocationChange(item);
  },

  // TODO: generate these in template as well.
  // <div style={{margin: 0, padding: 0, display: 'inline'}}>
  // <input name="utf8" type="hidden" value="✓"/>
  // <input name="_method" type="hidden" value="put"/>
  // <input name="authenticity_token" type="hidden" value="ngHe6Fhv4/YgCQW/6Jh+seYArHZbGC2AoALgmk4dPko="/></div>
  render: function () {
    return (
      <div className="user-form">
        <form accept-charset="UTF-8"
              className="form-horizontal formtastic widget"
              id="edit_widget" novalidate="novalidate">
          <fieldset className="inputs">
            <legend>
              <Translations
                defaultKey={'users.profile.widget.legends.settings'}>
              </Translations>
            </legend>


            <Photon url={'http://photon.komoot.de/api/'}
              lang={I18n.locale} limit={10}
              onLocationChange={this.onLocationChange}></Photon>

            <div className="number input optional numeric stringish form-group"
              id="widget_width_input">
              <label className=" control-label" htmlFor="widget_width">
                <Translations
                  defaultKey={'users.profile.widget.width'}>
                </Translations>
              </label>
              <span className="form-wrapper">
                <input className="form-control" id="widget_width"
                  name="widget[height]" step="any" type="number"
                  value={this.props.width} onChange={this.onWidthChange}/>
              </span>
            </div>
            <div className="number input optional numeric stringish form-group"
              id="widget_height_input">
              <label className=" control-label" htmlFor="widget_height">
                <Translations
                  defaultKey={'users.profile.widget.height'}>
                </Translations>
              </label>
              <span className="form-wrapper">
                <input className="form-control" id="widget_height"
                  name="widget[height]" step="any" type="number"
                  value={this.props.height}
                  onChange={this.onHeightChange}/>
              </span>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
});