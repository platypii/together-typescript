// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'together-ai/core';
import { APIResource } from 'together-ai/resource';
import * as ImagesAPI from 'together-ai/resources/images';

export class Images extends APIResource {
  /**
   * Generate images based on a given prompt using a specified model
   */
  create(body: ImageCreateParams, options?: Core.RequestOptions): Core.APIPromise<ImagesResponse> {
    return this._client.post('/images/generations', { body, ...options });
  }
}

export interface ImagesResponse {
  id?: string;

  created?: number;

  images?: Array<ImagesResponse.Image>;

  object?: string;
}

export namespace ImagesResponse {
  export interface Image {
    metadata?: Record<string, unknown>;

    url?: string;
  }
}

export interface ImageCreateParams {
  /**
   * The model to use for image generation.
   */
  model: string;

  /**
   * A description of the desired images. Maximum length varies by model.
   */
  prompt: string;

  /**
   * Height of the image to generate in number of pixels.
   */
  height?: number;

  /**
   * Number of image results to generate.
   */
  n?: number;

  /**
   * The prompt or prompts not to guide the image generation.
   */
  negative_prompt?: string;

  /**
   * Seed used for generation. Can be used to reproduce image generations.
   */
  seed?: number;

  /**
   * Number of generation steps.
   */
  steps?: number;

  /**
   * Width of the image to generate in number of pixels.
   */
  width?: number;
}

export namespace Images {
  export import ImagesResponse = ImagesAPI.ImagesResponse;
  export import ImageCreateParams = ImagesAPI.ImageCreateParams;
}