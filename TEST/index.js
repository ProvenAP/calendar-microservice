async function Test() {
  /**
   * GENERATE NEW APP KEY
   * GET /api/genkey
   */

  console.log("GENEREATE NEW APP_KEY FOR APPLICATION");
  console.log("GET /api/genkey");

  let key = await (await fetch("http://localhost:4350/api/genkey")).text();
  console.log(`RESPONSE: ${key}\n`);

  /**
   * REGISTER NEW EVENT
   * POST /api/events
   * INCLUDE APP_KEY IN AUTHORIZATION HEADER
   *
   * REQUEST BODY:
   * {
   *     "title": "test",
   *     "startTime": "Sun, 16 Nov 2025 04:32:33 GMT",
   *     "endTime": "Sun, 16 Nov 2025 04:32:33 GMT",
   *     "description": "test description"
   * }
   *
   * START TIME AND END TIME CAN BE ANY VALID TIME FORMAT
   */

  console.log("REGISTER NEW EVENT");
  console.log("POST /api/events");
  let response = await fetch("http://localhost:4350/api/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: key,
    },
    body: JSON.stringify({
      title: "Test Event",
      startTime: "Sun, 16 Nov 2025 04:32:33 GMT",
      endTime: "Sun, 16 Nov 2025 04:32:33 GMT",
      description: "Test Description",
    }),
  });

  console.log(`STATUS: ${response.status}\n`);

  /**
   * LIST ALL EVENTS
   * GET /api/events
   * INCLUDE APP_KEY IN AUTHORIZATION HEADER
   */

  console.log("GET ALL EVENTS");
  console.log("GET /api/events");
  response = await (
    await fetch("http://localhost:4350/api/events", {
      headers: {
        "Content-Type": "application/json",
        Authorization: key,
      },
    })
  ).json();

  console.log(`RESPONSE: ${JSON.stringify(response)}\n`);

  let eventId = response[0].eventId

  /**
   * GET EVENT BY ID
   * GET /api/events/{id}
   * INCLUDE APP_KEY IN AUTHORIZATION HEADER
   */
  console.log("GET EVENT BY ID");
  console.log(`GET /api/events/${eventId}`);
  response = await (
    await fetch(`http://localhost:4350/api/events/${eventId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: key,
      },
    })
  ).json();

  console.log(`RESPONSE: ${JSON.stringify(response)}\n`);

  /**
   * UPDATE EVENT
   * PUT /api/events/{id}
   * INCLUDE APP_KEY IN AUTHORIZATION HEADER
   *
   * REQUEST BODY:
   * {
   *    "title": "Updated Event",
   *    "endTime": "Sun, 18 Nov 2025 04:32:33 GMT",
   * }
   *
   */

  console.log("UPDATE EVENT");
  console.log(`PUT /api/events/${eventId}`);
  response = await fetch(`http://localhost:4350/api/events/${eventId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: key,
    },
    body: JSON.stringify({
      title: "Updated Event",
      endTime: "Tue, 18 Nov 2025 04:32:33 GMT"
    }),
  });

  console.log(`STATUS: ${response.status}\n`);

  /**
   * LIST ALL EVENTS
   * GET /api/events
   * INCLUDE APP_KEY IN AUTHORIZATION HEADER
   */

  console.log("GET ALL EVENTS");
  console.log("GET /api/events");
  response = await (
    await fetch("http://localhost:4350/api/events", {
      headers: {
        "Content-Type": "application/json",
        Authorization: key,
      },
    })
  ).json();

  console.log(`RESPONSE: ${JSON.stringify(response)}\n`);

  /**
   * GET EVENT BY ID
   * GET /api/events/{id}
   * INCLUDE APP_KEY IN AUTHORIZATION HEADER
   */
  console.log("DELETE EVENT BY ID");
  console.log(`GET /api/events/${eventId}`);
  response = await fetch(
    `http://localhost:4350/api/events/${eventId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: key,
      },
    }
  );

  console.log(`RESPONSE: ${response.status}\n`);

  /**
   * LIST ALL EVENTS
   * GET /api/events
   * INCLUDE APP_KEY IN AUTHORIZATION HEADER
   */

  console.log("GET ALL EVENTS");
  console.log("GET /api/events");
  response = await (
    await fetch("http://localhost:4350/api/events", {
      headers: {
        "Content-Type": "application/json",
        Authorization: key,
      },
    })
  ).json();

  console.log(`RESPONSE: ${JSON.stringify(response)}\n`);
}


Test()