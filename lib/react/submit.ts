type ApiResponses = {
  success: unknown;
  failure: unknown;
};

type ApiResponse<T extends ApiResponses> =
  | { success: true; data: T['success'] }
  | { success: false; errors: T['failure'] };

function unwrap<T extends ApiResponses>(json: {
  success: boolean;
  data: unknown;
  errors: unknown;
}): ApiResponse<T> {
  if (!json.success) {
    return { success: false, errors: json.errors as T['failure'] };
  }

  return { success: true, data: json.data as T['success'] };
}

export async function submit<O extends ApiResponses = ApiResponses>(
  form: HTMLFormElement
): Promise<ApiResponse<O>> {
  const body = Object.fromEntries(new FormData(form));

  try {
    const res = await fetch(form.getAttribute('action')!, {
      method: form.getAttribute('method')!,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body)
    });

    const json = await res.json();
    return unwrap<O>(json);
  } catch (error) {
    // hard errors
    return { success: false, errors: error as O['failure'] };
  }
}
