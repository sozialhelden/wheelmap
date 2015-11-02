var setParam = require('mout/queryString/setParam');
var debounce = require('mout/function/debounce');

function buildSrc(src, lat, lon) {
  return src + `#/?lat=${lat}&lon=${lon}`;
}

const MIN_WIDTH = 300;
const MIN_HEIGHT = 300;
const MAX_WIDTH = 800;
const MAX_HEIGHT = 800;

module.exports = React.createClass({

  getInitialState: function() {
    return {
      width: this.props.defaultWidth,
      height: this.props.defaultHeight,
      lat: this.props.defaultLat,
      lon: this.props.defaultLon,
      providers: this.props.defaultProviders || [],
      providerId: this.props.defaultProviderId,
      categories: this.props.defaultCategory,
      src: buildSrc(this.props.defaultSrc, this.props.defaultLat, this.props.defaultLon),
      resource: this.props.defaultResource
    };
  },

  componentDidUpdate: function(prevProps, prevState) {
    this.debouncedUpdate(prevState);
  },

  handleUpdate: function (prevState) {
    let { height, width, lat, lon, categories, providerId } = this.state;

    $.ajax({
      url: this.state.resource,
      dataType: 'json',
      type: 'POST',
      data: {
        widget: {
          provider_id: providerId,
          height, width, lat, lon, categories
        }
      },
      success: () => {
        if (prevState.lat !== lat || prevState.lon !== lon ||
          prevState.categories !== categories || prevState.providerId !== providerId){
          this.setState({ reload: (new Date).getTime() });
        }
      },
      error: (xhr, status, err) => {
        console.error(status, err.toString());
      }
    });
  },

  componentWillMount: function() {
    this.debouncedUpdate = debounce(this.handleUpdate, 300);
  },

  onWidthChange: function(width) {
    this.setState({ width });
  },

  onHeightChange: function(height) {
    this.setState({ height });
  },

  onLocationChange: function(item){
    let [ lon, lat ] = item.geometry.coordinates,
      src = buildSrc(this.props.defaultSrc, lat, lon);

    this.setState({ lat, lon, src });
  },

  onCategoriesChange: function(categories) {
    this.setState({ categories });
  },

  onProviderChange: function(providerId) {
    this.setState({ providerId });
  },

  render: function () {
    return (
      <div className="widget-panel">
        <WidgetForm
          defaultWidth={this.state.width}
          defaultHeight={this.state.height}
          minWidth={MIN_WIDTH}
          minHeight={MIN_HEIGHT}
          maxWidth={MAX_WIDTH}
          maxHeight={MAX_HEIGHT}
          categories={this.state.categories}
          providers={this.state.providers}
          providerId={this.state.providerId}
          onWidthChange={this.onWidthChange}
          onHeightChange={this.onHeightChange}
          onLocationChange={this.onLocationChange}
          onCategoriesChange={this.onCategoriesChange}
          onProviderChange={this.onProviderChange}/>
        <WidgetPreview
          reload={this.state.reload}
          width={this.state.width}
          height={this.state.height}
          src={this.state.src}/>
        <WidgetEmbed
          width={this.state.width}
          height={this.state.height}
          src={this.state.src}/>
      </div>
    );
  }
});
