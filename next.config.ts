module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/testimonial',
        destination: 'https://kidzbd.org/api/v2/testimonial',
      },
    ];
  },
};
