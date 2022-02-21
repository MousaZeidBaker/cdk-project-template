import { Callback, Context, Handler, SQSEvent } from "aws-lambda";

/**
 * Lambda handler
 *
 * @param {SQSEvent} event - The event
 * @returns {Promise<object>} The message body
 */
const innerHandler: Handler = async function (
  event: SQSEvent
): Promise<object> {
  return JSON.parse(event.Records[0].body);
};

/**
 * Handler wrapper to log received event and handler response
 *
 * @param {function} handler - The handler function to execute
 * @returns {void | any} The response from handler execution
 */
function withLogging(handler: Handler): void | any {
  return async function (
    event: SQSEvent,
    context: Context,
    callback: Callback
  ) {
    console.log(`Event: ${JSON.stringify(event)}`);
    const response = await handler(event, context, callback);
    console.log(`Response: ${JSON.stringify(response)}`);
    return response;
  };
}

export const handler: Handler = withLogging(innerHandler);
