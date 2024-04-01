#!/bin/sh

echo "<script type=\"text/javascript\">window.env = '${HTML_ENV}'</script></html>" >> /usr/share/nginx/html/complete.html
echo "<script type=\"text/javascript\">window.env = '${HTML_ENV}'</script></html>" >> /usr/share/nginx/html/dev-build.html
echo "<script type=\"text/javascript\">window.env = '${HTML_ENV}'</script></html>" >> /usr/share/nginx/html/index.html
echo "<script type=\"text/javascript\">window.env = '${HTML_ENV}'</script></html>" >> /usr/share/nginx/html/invest-build.html
echo "<script type=\"text/javascript\">window.env = '${HTML_ENV}'</script></html>" >> /usr/share/nginx/html/mnb-build.html
