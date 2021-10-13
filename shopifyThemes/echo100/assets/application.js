// Put your application javascript here
const sort_bySelect = document.getElementById('sort_by');

if (sort_bySelect) {
	sort_bySelect.addEventListener('change', (event) => {
		const url = new URL(window.location.href);
		url.searchParams.set('sort_by', event.currentTarget.value);

		window.location = url.href;
	});
}

const article = {
	id: 586672931056,
	title: 'Welcome to Echo100',
	created_at: '2021-10-09T12:28:01+02:00',
	body_html:
		'\u003cem\u003eWelcome to Echo100\u003c/em\u003e, an \u003cspan style="text-decoration: underline;"\u003eexample \u003c/span\u003e\u003cspan\u003eblog post\u003c/span\u003e to test the \u003cstrong\u003eblog post \u003cspan style="text-decoration: underline;"\u003efunctionality\u003c/span\u003e\u003c/strong\u003e.',
	blog_id: 82617368816,
	author: 'Mazen Mohamed',
	user_id: 77802340592,
	published_at: '2021-10-09T12:28:00+02:00',
	updated_at: '2021-10-09T12:28:01+02:00',
	summary_html: '',
	template_suffix: '',
	handle: 'welcome-to-echo100',
	tags: 'example, first LOL, test',
	image: {
		created_at: '2021-10-09T12:28:01+02:00',
		alt: '',
		width: 632,
		height: 641,
		src: 'https://cdn.shopify.com/s/files/1/0600/4159/3072/articles/4c5e63bd58838e907f24bf8b87ac2f19571f3fb59279db43155dcd2873b76d36.jpg?v=1633775281',
	},
};
