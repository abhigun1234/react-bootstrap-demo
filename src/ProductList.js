import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export default class ProductList extends Component {
  render() {
    return (
      <div>
<div class="products">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="data:image/jpeg;base64,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" />
      <Card.Body>
        <Card.Title>Camera</Card.Title>
        <Card.Text>
          5000
        </Card.Text>
        <Button variant="primary">ADD To Cart</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="data:image/jpeg;base64,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" />
      <Card.Body>
        <Card.Title>Camera</Card.Title>
        <Card.Text>
          5000
        </Card.Text>
        <Button variant="primary">ADD To Cart</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="data:image/jpeg;base64,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" />
      <Card.Body>
        <Card.Title>Camera</Card.Title>
        <Card.Text>
          5000
        </Card.Text>
        <Button variant="primary">ADD To Cart</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="data:image/jpeg;base64,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" />
      <Card.Body>
        <Card.Title>Camera</Card.Title>
        <Card.Text>
          5000
        </Card.Text>
        <Button variant="primary">ADD To Cart</Button>
      </Card.Body>
    </Card><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH0AvQMBIgACEQEDEQH/xAAcAAEBAAEFAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA1EAABBAECBQIEBAUFAQAAAAABAAIDEQQFMQYSIUFRE2EHFJGxIzJxgSJCYqHBJHLR4fAV/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABgRAQEBAQEAAAAAAAAAAAAAAAABEQIh/9oADAMBAAIRAxEAPwD2VFUpVkG6qgVQEREERVRARFaQRFUQRVEQFFUQRFUQRFUQEREBERAREQEREBERBEQogKkqLqvEHHmk6HlnEnZkTSNID3RNBaw9DV+aNomu1hFx2h63g63jCbBltw/PE6g+M/1DsuSr2RUREQEREBERAREQEREBVREBERAVUCqAiKEoIihIU5wg47iaV8OgZ7ohJzmFzQ6Ldliub9l83OyZ8SFz8cOp3VzLLmk9z02vuvojjTMOJwnquRH+dmM6l85NnMpBgl9KQfyP/KUG+0TOx5Y8l8+RLg5cbXS+tGHcsjSerj3s3X0XbeFuPJtFfJFDNkaxjFpcTLIWBp6cvJdnsbvyuk5enjJxnSFsbcjlALWvLbvf9QuH5JsaUNc18UgAc3py2DsR7Hzsg9Gx+NuJtQ4rjyxlMxIow78PIk5IXN5b5Qy6d+p639Frt+Kmuafqnq50+LlYpkp2OyHkAb4a675vc2PK6NjalkOhkjc1r3em9zSRuQCa6fp9lwsTMjOy2RQtMkrzTWtF11+yD6503Og1LAx83EdzQzsD23uL7H3GxW5Xkvw04mj4e0l+i60XmWOZ8jCwH8OMgGnc1WQb2voV6nBPHkQxzQPEkUjQ5j2mw4HYhBrosQVQUGSKIgqIiAiIgIiICqiqAsXKqFBoyGltnSEHut08LbyMQcHxpeRwjq8Xc4zl81xvLsksAJJNADuvpPizOwsDQ8xudO2MzQvZG3dziRXQD7r5/jmxMISfKRRyul/NLMCSR4FEABBtzJmEugiheeYbu6AfVbiDUsiHDOLq+Pj5ccTeWJmSCHMaBQDJG7V2HtV9lvoNR03LayDLhbiyk0J2uPI0V4HW/wD3uuEzpS8mKCQTRkmvKK3WVLpuJkYeTgSZDoJ3P54pWdYRdAcw6O6H9iD5C2WPkY+JG4Qc8WYGtLJHEbiiQD227rex4ujR6ZhyS5GRFMXkZLW9SDsHVsKNdO4vvS2ByJcf1IH4+NkR89va9u5HS2uFEX7H+6Dl87iOKfMJngAJgFOaxwc5/KAO9bg9V3n4P6tqcOsN07JzHZGHKym78jHBhdXWqddCgKPna/N4BhmMHDjnjiLgSyYg8rqF0RuPegV6Rw3i5UOXoMsbo3PmmYBZNt5ml3W9+gdte3ZEr2UOWbStC+vstRpRGsCqsGrMIqhERAREQEREBVRCgWsSVCVpucgr3ALrfFXE+LokD42SNkzi22RBjn8t7Fwb9ulrnXP/AIgD1XzbqetZfzubkB5bmZGe6J819WNvqB46/akGOv6rrGdqEuXJkfNP3IBc17R7NIFD9FJ45YdPg1LUMdufps/8LsnHkuWF3hzuzh4dYOy7tLwy7N0uCXE1OGJkLAJZMkvLnyC/4y8W1u9dRW/ldB1ePVuH9Ry8J8Lsd00dTw/mimadiBsR4NmvNUszqW4T1weqRNhyLxsj5jGf1ilAokeCOzh3CRZknpCJscfPzhzZAz8S6qr8HwsMaVkYfFKLhkFH+g9nD3H2sLCGKQzUPzNPU+FpXKYknzOpNgyYvTa5xbMHNIMZ87GiK8LaSXFMWOaWlpLSPt/Zdk+WjgxIcuNrpHzAuc5zrc4+5+v0XDalkx6rrOVkB4jje5zmfw10FnbyfuRdIi4xPKBfS13n4etL+LtGb1Lg97hfWgGPJXRcboG30K798N4hNxdpoo1GySQkezSB/chEr2tajFGMJOy12xoK1ZhA1VFEREBERACFAqgiFEQablt5bpbohabmWg42QkHrYXhPxE0L/wCdxDqEQYRHnf67EdfQvF+ozffqT9F9ASRB24XWeM+GYuIdKdjOeYp43erjTjeGQbH9PKDzr4fcVGERl7rockrD/n2K57jbRcGfQMiTGkY3HgZ8zg2R+A2wJov9nUPA7dQNl5nn4Go6VqTmvj9DUx0kgPVuR5fH2N719Fy+PxnE/R8jS9Rxp7kbymJvQ3e17ttY6jPPNldKh0+WWV3qAsHM5u38zetfRczLAwQ4bo2UXRBpA7ua4t+tcq5SXAmMzofRcZ2vhcI2izzlpsfrXReh8G8IxaWyDM1VjZM9jaiZu2CyT+7uu/bsujVrW4X4Mjx8LGl1RrTM2HlbBuGF35ifJ/789OJ1f4UY2VM+fSMv5OUmw0stn07fsvRI2ueVvoYqUZeBz/DniyDL9NmmnJaT0mjnj5T9XAj6L1ngTguPh+AT5bmyahIynvGzBvyj/ldsYwLVaEVk1oGyzUGyqKqiIgIiICIiB2VUKqAoqogKEKogwc1aEkd9luVCEHVuJ+D9O4kw/Qz4jztNxyxmnxnyCujR/DDW4cpoh14vhZ0Y+WMOkaPZy9hOyw3RHTuH+E49FhIA9bJcbfkPFuJ/wubiwHXbyuWpAEMbeLHDdlrhoA6LKlaQxAFkAgCqKoRRVBUQIgIiICIiAVVFUBREQEREEQqoUGNLGlnSUgwpWlklIMaVAVRAREQES0QVFLRBUREBERB//9k=" />
      <Card.Body>
        <Card.Title>Camera</Card.Title>
        <Card.Text>
          5000
        </Card.Text>
        <Button variant="primary">ADD To Cart</Button>
      </Card.Body>
    </Card>
    </div>


      </div>
    )
  }
}
